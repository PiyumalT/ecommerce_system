package com.ecommercesystem.backend;

import com.ecommercesystem.backend.controller.UserController;
import com.ecommercesystem.backend.model.User;
import com.ecommercesystem.backend.repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/user")
public class UserPages implements PageRepository {
    @Autowired
    private UserController userController;
    @Override
    @GetMapping("/all")
    public ModelAndView viewAll(Model model) {
        model.addAttribute("allUsers", userController.getAllUsers().getBody());
        model.addAttribute("pageName", "All Users");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("users");

        return modelAndView;
    }

    @Override
    public ModelAndView createItem(Model model) {
        return null;
    }

    @Override
    @GetMapping("/{id}")
    public ModelAndView viewItemById(Model model, @PathVariable("id") long id) {
        User user = userController.getUserById(id).getBody();
        assert user != null;
        model.addAttribute("allUsers", user);
        model.addAttribute("pageName", user.getName() + "'s page");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("users");

        return modelAndView;
    }

    @Override
    public ModelAndView editItemById(Model model) {
        return null;
    }

    @Override
    public ModelAndView removeItemById(Model model) {
        return null;
    }
}
