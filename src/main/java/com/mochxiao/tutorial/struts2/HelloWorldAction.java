package com.mochxiao.tutorial.struts2;

import com.opensymphony.xwork2.ActionSupport;

/**
 * Created by moch on 11/22/16.
 */
public class HelloWorldAction extends ActionSupport {
    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String execute() throws Exception {
        if (name.equals("SECRET")) {
            return "success";
        }
        return "error";
    }
}
