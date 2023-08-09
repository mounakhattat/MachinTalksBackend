package TestApplication.MachinesTalk.controllers;

import TestApplication.MachinesTalk.entities.Application;
import TestApplication.MachinesTalk.services.ApplicationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {
    @Autowired
    ApplicationServiceImpl servicesss;
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
    public Application update( @RequestBody Application testApp) {
        return servicesss.update(testApp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer idTestApp) {
        servicesss.delete(idTestApp);
    }


}
