package com.digitalplanet.research.frontend.test.app.k8s;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableDiscoveryClient
@ComponentScan(basePackages = "com.digitalplanet.research.frontend.test")
public class K8SApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(K8SApplication.class, args);
    }
}
