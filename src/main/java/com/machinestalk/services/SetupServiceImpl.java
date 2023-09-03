package com.machinestalk.services;

import com.machinestalk.entities.Paths;
import com.machinestalk.entities.Scenario;
import com.machinestalk.entities.Setup;
import com.machinestalk.models.Directory;
import com.machinestalk.repositories.SetupRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
@AllArgsConstructor
public class SetupServiceImpl implements SetupService {

    SetupRepository setupRepository ;
    @Override
    public List<Setup> findAll() {
        return setupRepository.findAll();
    }
    @Transactional
    @Override
    public Setup save(Setup setup) throws Exception {
        assignScenarioToSetupAndPath(setup);

        return setupRepository.save(setup);
    }

    @Override
    public Setup update( Setup setup) {
        return setupRepository.save(setup);
    }
    @Override
    public Setup findById(Integer id) {
        return setupRepository.findById(id).get();
    }
    @Override
    public void delete(Integer id) {
        setupRepository.deleteById(id);
    }


    @Override
    public void assignScenarioToSetup(Setup setup) {
        List<Scenario> scenarios = setup.getScenarios().stream().map(sc -> {
            sc.setSetup(setup);
            return sc;
        }).collect(Collectors.toList());
        setup.setScenarios(scenarios);
    }
    @Override
    public void assignScenarioToSetupAndPath(Setup setup) {
        List<Scenario> scenarios = setup.getScenarios().stream().map(sc -> {
            Paths path = sc.getPath();
            if (path != null) {
                sc.setPath(path);
                path.getScenarios().add(sc);
            }
            sc.setSetup(setup);
            return sc;
        }).collect(Collectors.toList());
        setup.setScenarios(scenarios);
    }
    @Override
    public ResponseEntity<InputStreamResource> downloadRapport(Directory directoryurl) throws IOException {
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

        zipDirectoryContents(zipOutputStream, folder, "");

        zipOutputStream.close();

        // Set headers for download
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=Rapport.zip");
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);

        return ResponseEntity.ok()
                .headers(headers)
                .body(new InputStreamResource(new ByteArrayInputStream(byteArrayOutputStream.toByteArray())));
    }

    private void zipDirectoryContents(ZipOutputStream zipOutputStream, File folder, String currentPath) throws IOException {
        File[] files = folder.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isFile()) {
                    try (FileInputStream fileInputStream = new FileInputStream(file)) {
                        ZipEntry zipEntry = new ZipEntry(currentPath + file.getName());
                        zipOutputStream.putNextEntry(zipEntry);
                        byte[] bytes = new byte[1024];
                        int length;
                        while ((length = fileInputStream.read(bytes)) >= 0) {
                            zipOutputStream.write(bytes, 0, length);
                        }
                        zipOutputStream.closeEntry();
                    }
                } else if (file.isDirectory()) {
                    zipDirectoryContents(zipOutputStream, file, currentPath + file.getName() + "/");
                }
            }
        }
    }
}
