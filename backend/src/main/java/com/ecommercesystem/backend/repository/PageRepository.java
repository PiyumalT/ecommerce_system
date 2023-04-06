package com.ecommercesystem.backend.repository;

import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

public interface PageRepository {
    ModelAndView viewAll(Model model);

    ModelAndView createItem(Model model);

    ModelAndView viewItemById(Model model, long id);

    ModelAndView editItemById(Model model);

    ModelAndView removeItemById(Model model);
}
