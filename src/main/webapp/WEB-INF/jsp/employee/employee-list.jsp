<%--
  Created by IntelliJ IDEA.
  User: moch
  Date: 11/25/16
  Time: 10:43 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
    <title>List Employee</title>
</head>
<body>


    <s:form action="employee-save">
        <s:textfield name="firstName" label="FirstName"></s:textfield>
        <s:textfield name="lastName" label="LastName"></s:textfield>
        <s:textfield name="email" label="Email"></s:textfield>
        <s:submit value="Add"></s:submit>
    </s:form>

    <br><br>

    <table cellpadding="10" cellspacing="0" border="1">
        <thead>
            <tr>
                <td>ID</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Email</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            <s:iterator value="#request.emps">
                <tr>
                    <td>${id}</td>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td><a href="employee-edit?id=${id}">Edit</a></td>
                    <td><a href="employee-delete?id=${id}">Delete</a></td>
                </tr>
            </s:iterator>
        </tbody>
    </table>



</body>
</html>
