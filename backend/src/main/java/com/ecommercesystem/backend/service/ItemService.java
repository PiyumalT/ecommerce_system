package com.ecommercesystem.backend.service;

import com.ecommercesystem.backend.exceptionHandler.ResourceNotFoundException;
import com.ecommercesystem.backend.model.Item;
import com.ecommercesystem.backend.repository.ItemRepository;
import com.ecommercesystem.backend.util.FileUploadUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item createNewItem(Item item, MultipartFile image) throws IOException {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(image.getOriginalFilename()));
        String uploadDir = "items/";
        item.setImages("http://localhost:8080" + uploadDir + fileName);
        FileUploadUtil.save(uploadDir, fileName, image);
        return itemRepository.save(item);
    }

    public Item getItemById(long id) {
        return itemRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No item found to the given item id: " + id)
        );
    }

    public Item updateItem(long id, Item editedItem) {

        return itemRepository.updateItem(id, editedItem.getName(), editedItem.getDescription(), editedItem.getPrice(), editedItem.getOptions(), editedItem.getQuantity(), editedItem.getCategory(), editedItem.getImages());
    }

    public void deleteItem(long id) {
        Item item = getItemById(id);
        itemRepository.delete(item);
    }

    public List<Item> searchItemsByName(String searchTerm) {
        return itemRepository.searchItemsByName(searchTerm);
    }
}
