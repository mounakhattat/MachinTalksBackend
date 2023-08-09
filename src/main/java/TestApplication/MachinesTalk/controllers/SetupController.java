package TestApplication.MachinesTalk.controllers;

import TestApplication.MachinesTalk.entities.Setup;
import TestApplication.MachinesTalk.services.SetupServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/setup")
@CrossOrigin(origins = "*")
public class SetupController {
    @Autowired
    SetupServiceImpl setupService;
    @GetMapping()
    public List<Setup> findAll() {

        return setupService.findAll();
    }
    @GetMapping("/{id}")
    public Setup findById(@PathVariable("id") Integer id) {
        return setupService.findById(id);
    }
    //http://localhost:8089/TestApp/create-TestApp
    @PostMapping()
    public Setup save(@RequestBody Setup setup) throws Exception {
        return setupService.save(setup);

    }

    @PutMapping()
    public Setup update( @RequestBody Setup setup) {
        return setupService.update(setup);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer id) {
        setupService.delete(id);
    }

}
