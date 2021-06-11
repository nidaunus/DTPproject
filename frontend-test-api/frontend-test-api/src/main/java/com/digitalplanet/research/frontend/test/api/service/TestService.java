package com.digitalplanet.research.frontend.test.api.service;

import com.digitalplanet.corporate.web.common.api.generic.Message;
import com.digitalplanet.research.frontend.test.api.dto.TestDto.TestApiDto;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

public interface TestService {

    @GetMapping(value = "/v1/list")
    @ResponseBody
    ResponseEntity<Message> getTestList();

    @PostMapping(value = "/v1/add")
    ResponseEntity<Message> saveTestList(@RequestBody TestApiDto test);

    @PostMapping(value = "/v1/addForm")
    ResponseEntity<Message> saveTestListForm(@ModelAttribute TestApiDto test);

    @PostMapping(value = "/v1/uploadFiles", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    ResponseEntity<Message> uploadFileMultiple(@RequestParam("file") MultipartFile[] files);

    @PostMapping(value = "/v1/uploadFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    ResponseEntity<Message> uploadFile(@RequestParam("file") MultipartFile file);

}
