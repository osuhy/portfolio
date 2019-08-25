package com.osh.portfolio.web;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

  @RequestMapping(value={"/"}) //ex "/user", "/user/{name:\\w+}"
  public String index(){
    return "index";
  }

}
