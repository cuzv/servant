<%--
  Created by IntelliJ IDEA.
  User: moch
  Date: 11/25/16
  Time: 2:50 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<html>
<head>
    <title></title>
</head>
<body>

    <s:form action="employee-update">
        <s:hidden name="id"></s:hidden>
        <s:textfield name="firstName" label="FirstName"></s:textfield>
        <s:textfield name="lastName" label="LastName"></s:textfield>
        <s:textfield name="email" label="Email"></s:textfield>
        <s:submit value="Confirm"></s:submit>
    </s:form>

</body>
</html>
