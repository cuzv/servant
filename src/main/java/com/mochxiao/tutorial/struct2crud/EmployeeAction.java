package com.mochxiao.tutorial.struct2crud;

import com.opensymphony.xwork2.ModelDriven;
import com.opensymphony.xwork2.Preparable;
import org.apache.struts2.interceptor.RequestAware;

import java.util.Map;

/**
 * Created by moch on 11/25/16.
 */
public class EmployeeAction implements RequestAware, ModelDriven<Employee>, Preparable {

    private Employee employee;
    private Map<String,Object> request;
    private Dao dao = new Dao();
    private Integer id;

    public void setRequest(Map<String,Object> request) {
        this.request = request;
    }

    public Employee getModel() {
        return employee;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public void prepareUpdate() {
        employee = new Employee();
    }

    public String update() {
        dao.update(employee);
        return "success";
    }

    public String list() {
        request.put("emps", dao.getEmployees());
        return "list";
    }

    public void prepareSave() {
        employee = new Employee();
    }

    public String save() {
        dao.save(employee);
        return "success";
    }

    public String delete() {
        dao.delete(id);
        return "success";
    }

    public void prepareEdit() {
        employee = dao.get(id);
    }

    public String edit() {
        return "edit";
    }

    public void prepare() throws Exception {
        System.out.println("prepare ...");
    }
}

