package com.mochxiao.filter;

import javax.servlet.*;
import java.io.IOException;

/**
 * Created by moch on 11/16/16.
 */
//@WebFilter(filterName = "DispatchFilter")
public class DispatchFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
