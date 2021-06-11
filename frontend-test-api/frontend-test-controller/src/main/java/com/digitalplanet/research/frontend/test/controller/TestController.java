package com.digitalplanet.research.frontend.test.controller;

import com.digitalplanet.corporate.web.common.api.generic.Message;
import com.digitalplanet.research.frontend.test.api.dto.TestDto;
import com.digitalplanet.research.frontend.test.api.service.TestService;
import com.digitalplanet.research.frontend.test.service.service.impl.TestServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TestController implements TestService {

    private final TestServiceImpl testServiceImpl;

    public TestController(TestServiceImpl testServiceImpl) {
        this.testServiceImpl = testServiceImpl;
    }

    @Override
    public ResponseEntity<Message> getTestList() {
        return testServiceImpl.getTestList();
    }

    @Override
    public ResponseEntity<Message> saveTestList(TestDto.TestApiDto test) {
        return testServiceImpl.saveTestList(test);
    }

    @Override
    public ResponseEntity<Message> saveTestListForm(TestDto.TestApiDto test) {
        return testServiceImpl.saveTestListForm(test);
    }

    @Override
    public ResponseEntity<Message> uploadFile(MultipartFile file) {
        return testServiceImpl.uploadFile(file);
    }

    @Override
    public ResponseEntity<Message> uploadFileMultiple(MultipartFile[] files) {
        return testServiceImpl.uploadFileMultiple(files);
    }

}
