package com.digitalplanet.research.frontend.test.app.cmd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableEurekaClient
@ComponentScan(basePackages = "com.digitalplanet.research.frontend.test")
public class CMDApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(CMDApplication.class, args);
    }
}
