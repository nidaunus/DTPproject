package com.digitalplanet.research.frontend.test.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public interface TestDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
     class TestApiDto{
        private String name;
        private String surname;
        private int age;
    }
}
