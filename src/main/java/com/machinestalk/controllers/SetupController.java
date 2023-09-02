package com.machinestalk.controllers;

import com.machinestalk.entities.Setup;
import com.machinestalk.geenerateclass.ClassGenerated;
import com.machinestalk.geenerateclass.GenerateRapport;
import com.machinestalk.models.Directory;
import com.machinestalk.models.SetupDTO;
import com.machinestalk.services.GenerationServiceImpl;
import com.machinestalk.services.SetupServiceImpl;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import java.util.List;

@RestController
@RequestMapping("/setup")
@CrossOrigin(origins = "*")
public class SetupController {
    @Autowired
    SetupServiceImpl setupService;
    @Autowired
    ClassGenerated classGenerated;
    @Autowired
    GenerationServiceImpl generationService;
    @Autowired
    GenerateRapport generateRapport;
    @GetMapping()
    public List<Setup> findAll() {
        return setupService.findAll();
    }
    @GetMapping("/{id}")
    public Setup findById(@PathVariable("id") Integer id) {
        return setupService.findById(id);
    }
    //http://localhost:8089/TestApp/create-TestApp
  /*  @PostMapping()
    public Setup save(@RequestBody Setup setup) throws Exception {
        return setupService.save(setup);

    }*/

    @PutMapping()
    public Setup update( @RequestBody Setup setup) {
        return setupService.update(setup);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer id) {
        setupService.delete(id);
    }

    @PostMapping()
    public Directory Generation(@RequestBody SetupDTO setupDto) {
        Setup setupEntity = new Setup();
        Directory directoryurl = new Directory();
        setupEntity.setCle(setupDto.getCle());
        setupEntity.setId(setupDto.getId());
        setupEntity.setName(setupDto.getName());
        setupEntity.setScenarios(setupDto.getScenarios());
        try {
            setupService.save(setupEntity);
            classGenerated.testing(setupDto);

        } catch (Throwable t) {
            t.printStackTrace();
        }
        generateRapport.Rapport();
        String locationRapportPath= generationService.URPpath();
        directoryurl.setName(locationRapportPath);
        return directoryurl;

    }

    @GetMapping("/rapport")
    public ResponseEntity<InputStreamResource> downloadRapport(@RequestBody Directory directoryurl) throws IOException {
        // Provide the path to the folder on your local file system
        String folderPath = directoryurl.getName();

        File folder = new File(folderPath);

        // Check if the folder exists and is a directory
        if (!folder.exists() || !folder.isDirectory()) {
            return ResponseEntity.notFound().build();
        }

        // Create a ZIP archive of the folder's contents
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ZipOutputStream zipOutputStream = new ZipOutputStream(byteArrayOutputStream);

        File[] files = folder.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isFile()) {
                    try (FileInputStream fileInputStream = new FileInputStream(file)) {
                        ZipEntry zipEntry = new ZipEntry(file.getName());
                        zipOutputStream.putNextEntry(zipEntry);
                        byte[] bytes = new byte[1024];
                        int length;
                        while ((length = fileInputStream.read(bytes)) >= 0) {
                            zipOutputStream.write(bytes, 0, length);
                        }
                        zipOutputStream.closeEntry();
                    }
                }
            }
            zipOutputStream.close();
        }

        // Set headers for download
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=Rapport.zip");
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);

        return ResponseEntity.ok()
                .headers(headers)
                .body(new InputStreamResource(new ByteArrayInputStream(byteArrayOutputStream.toByteArray())));
    }



}
