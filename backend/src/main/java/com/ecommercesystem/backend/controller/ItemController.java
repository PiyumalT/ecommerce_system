package com.ecommercesystem.backend.controller;

import com.ecommercesystem.backend.model.Item;
import com.ecommercesystem.backend.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
//@CrossOrigin //remove in production - bypass CORS policy error
@RequestMapping("/api/v1/items")
public class ItemController {

    private final ItemService itemService;

    @GetMapping("")
    public ResponseEntity<List<Item>> getAllItems() {
        return ResponseEntity.ok(itemService.getAllItems());
    }

    @PostMapping("/newItem")
    public ResponseEntity<Item> createNewItem(@RequestBody Item item, @RequestParam("image") MultipartFile image) throws IOException {
        return ResponseEntity.ok(itemService.createNewItem(item, image));
    }

    @GetMapping("{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") long id) {
        return ResponseEntity.ok(itemService.getItemById(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<Item> updateItem(@PathVariable("id") long id, @RequestBody Item editedItem) {
        return ResponseEntity.ok(itemService.updateItem(id, editedItem));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable("id") long id) {
        itemService.deleteItem(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search={searchTerm}")
    public ResponseEntity<List<Item>> searchItemByName(@PathVariable("searchTerm") String searchTerm) {
        return ResponseEntity.ok(itemService.searchItemsByName(searchTerm));
    }
}
