package com.ecommercesystem.backend.repository;

import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

public interface PageRepository {
    public ModelAndView viewAll(Model model);
    public ModelAndView createItem(Model model);
    public ModelAndView viewItemById(Model model, long id);
    public ModelAndView editItemById(Model model);
    public ModelAndView removeItemById(Model model);
}
