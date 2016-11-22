<%--
  Created by IntelliJ IDEA.
  User: Moch
  Date: 2/2/16
  Time: 23:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Hello servant.</title>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="run.js"></script>
    <script src="browser.js"></script>
</head>
<body>
    Hello servant.

    <form action="hello">
        <label for="name">Please enter your name</label><br/>
        <input type="text" name="name"/>
        <input type="submit" value="Say Hello"/>
    </form>

</body>
</html>
