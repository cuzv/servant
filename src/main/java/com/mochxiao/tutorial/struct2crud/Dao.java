package com.mochxiao.tutorial.struct2crud;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by moch on 11/25/16.
 */
public class Dao {
    private  static Map<Integer, Employee> emps = new LinkedHashMap<Integer, Employee>();

    static {
        emps.put(1001, new Employee(1001, "A", "a", "a@mochxiao.com"));
        emps.put(1002, new Employee(1002, "B", "b", "b@mochxiao.com"));
        emps.put(1003, new Employee(1003, "C", "c", "c@mochxiao.com"));
        emps.put(1004, new Employee(1004, "D", "d", "d@mochxiao.com"));
        emps.put(1005, new Employee(1005, "E", "e", "e@mochxiao.com"));
    }

    public List<Employee> getEmployees() {
        return new ArrayList<Employee>(emps.values());
    }

    public void delete(Integer employeeId) {
        emps.remove(employeeId);
    }

    public void save(Employee employee) {
        int time = (int)System.currentTimeMillis();
        employee.setId(time);
        emps.put(employee.getId(), employee);
    }

    public Employee get(Integer employeeId) {
        return emps.get(employeeId);
    }

    public void update(Employee employee) {
        emps.put(employee.getId(), employee);
    }
}
