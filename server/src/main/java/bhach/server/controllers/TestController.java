package bhach.server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api")
public class TestController {
    @GetMapping("/hello")
    public String helloString() {
        return "hello world";
    }
    
}
