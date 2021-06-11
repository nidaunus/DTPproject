package com.digitalplanet.research.frontend.test.service.service.impl;

import com.digitalplanet.corporate.web.common.api.generic.ApiResponse;
import com.digitalplanet.corporate.web.common.api.generic.Message;
import com.digitalplanet.research.frontend.test.api.dto.FilesStorageService;
import com.digitalplanet.research.frontend.test.api.dto.TestDto;
import com.digitalplanet.research.frontend.test.api.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TestServiceImpl implements TestService {

    @Autowired
    FilesStorageService storageService;

    @Override
    public ResponseEntity<Message> getTestList() {
        List<TestDto.TestApiDto> body = new ArrayList<>();
        String message = "";
        try {
            TestDto.TestApiDto dto = new TestDto.TestApiDto();
            dto.setName("nida");
            dto.setSurname("unus");
            dto.setAge(31);
            body.add(dto);
            message = "Succses";
            return ApiResponse.status(HttpStatus.OK).body(new Message(body, message));
        } catch (Exception e) {
            message = e.getMessage();
            return ApiResponse.status(HttpStatus.EXPECTATION_FAILED).body(new Message(message, (Object) body));
        }

    }

    @Override
    public ResponseEntity<Message> saveTestList(TestDto.TestApiDto test) {
        TestDto.TestApiDto body = new TestDto.TestApiDto();
        String alert = "";
        try {
            body.setName(test.getName().isEmpty() ? body.getName() : test.getName());
            body.setSurname(test.getSurname().isEmpty() ? body.getSurname() : test.getSurname());
            body.setAge(test.getAge() == 0 ? body.getAge() : test.getAge());
            alert = "Succses";
            return ApiResponse.status(HttpStatus.OK).body(new Message(body, alert));
        } catch (Exception e) {
            alert = e.getMessage();
            return ApiResponse.status(HttpStatus.EXPECTATION_FAILED).body(new Message(alert, body));
        }
    }

    @Override
    public ResponseEntity<Message> saveTestListForm(TestDto.TestApiDto test) {
        TestDto.TestApiDto body = new TestDto.TestApiDto();
        String alert = "";
        try {
            body.setName(test.getName().isEmpty() ? body.getName() : test.getName());
            body.setSurname(test.getSurname().isEmpty() ? body.getSurname() : test.getSurname());
            body.setAge(test.getAge() == 0 ? body.getAge() : test.getAge());
            alert = "Succses";
            return ApiResponse.status(HttpStatus.OK).body(new Message(body, alert));
        } catch (Exception e) {
            alert = e.getMessage();
            return ApiResponse.status(HttpStatus.EXPECTATION_FAILED).body(new Message(alert, body));
        }
    }

    @Override
    public ResponseEntity<Message> uploadFile(MultipartFile file) {
        String message = "";
        try {
            storageService.save(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ApiResponse.status(HttpStatus.OK).body(new Message((Object) null, message));
        } catch (Exception e) {
            message = "Could not upload the file!";
            return ApiResponse.status(HttpStatus.EXPECTATION_FAILED).body(new Message(message, (Object) null));
        }
    }

    @Override
    public ResponseEntity<Message> uploadFileMultiple(MultipartFile[] files) {
        String message = "";
        try {
            List<String> fileNames = new ArrayList<>();
            Arrays.asList(files).stream().forEach(file -> {
                storageService.save(file);
                fileNames.add(file.getOriginalFilename());
            });
            message = "Uploaded the file successfully: " + fileNames;
            return ApiResponse.status(HttpStatus.OK).body(new Message((Object) null, message));
        } catch (Exception e) {
            message = "Could not upload the file!";
            return ApiResponse.status(HttpStatus.EXPECTATION_FAILED).body(new Message(message, (Object) null));
        }
    }
}
