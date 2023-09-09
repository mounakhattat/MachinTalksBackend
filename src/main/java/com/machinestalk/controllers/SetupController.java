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
    @PutMapping()
    public Setup update( @RequestBody Setup setup) {
        return setupService.update(setup);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer id) {
        setupService.delete(id);
    }

    @PostMapping()
    public ResponseEntity<InputStreamResource> Generation(@RequestBody SetupDTO setupDto) throws IOException {
        Setup setupEntity = new Setup();
        Directory directoryurl = new Directory();
        setupEntity.setCle(setupDto.getCle());
        setupEntity.setId(setupDto.getId());
        setupEntity.setName(setupDto.getName());
        setupEntity.setScenarios(setupDto.getScenarios());
        try {
            setupService.save(setupEntity);
            classGenerated.testing(setupDto);
            Thread.sleep(9000);
            generateRapport.Rapport(setupDto);
            String locationRapportPath= generationService.URPpath();
            directoryurl.setName(locationRapportPath);
            System.out.println("NAME Directory Generated  ♣♣♣♣  "+directoryurl);
            return   setupService.downloadRapport(directoryurl);
        } catch (Throwable t) {
            t.printStackTrace();
        }

        return null;
    }






}
