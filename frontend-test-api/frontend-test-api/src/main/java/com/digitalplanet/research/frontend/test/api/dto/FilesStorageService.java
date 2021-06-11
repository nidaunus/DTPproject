package com.digitalplanet.research.frontend.test.api.dto;

import org.springframework.web.multipart.MultipartFile;

public interface FilesStorageService {

    void save(MultipartFile file);

}
