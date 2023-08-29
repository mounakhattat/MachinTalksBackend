package com.machinestalk.controllers;

import com.machinestalk.models.SetupDTO;
import com.machinestalk.geenerateclass.ClassGenerated;
import com.machinestalk.entities.Application;
import com.machinestalk.services.ApplicationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {
    @Autowired
    ApplicationServiceImpl servicesss;
    @Autowired
    ClassGenerated classGenerated;

    //http://localhost:8085/TestApp/display-TestApp
    @GetMapping()
    public List<Application> findAll() {

        return servicesss.findAll();
    }

    @GetMapping("/{id}")
    public Application findById(@PathVariable("id") Integer id) {
        return servicesss.findById(id);
    }

    //http://localhost:8089/TestApp/create-TestApp
    @PostMapping()
    public Application save(@RequestBody Application application) {
        return servicesss.save(application);
    }

    @PutMapping()
    public Application update(@RequestBody Application testApp) {
        return servicesss.update(testApp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer idTestApp) {
        servicesss.delete(idTestApp);
    }

   @PostMapping("/Genaration")
    public void Generation(@RequestBody SetupDTO setup) {
       try {
           classGenerated.testing(setup);
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }
}