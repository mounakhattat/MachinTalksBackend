package TestApplication.MachinesTalk.controllers;

import TestApplication.MachinesTalk.entities.Parameters;
import TestApplication.MachinesTalk.entities.Paths;
import TestApplication.MachinesTalk.services.ParametersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/parameters")
@CrossOrigin(origins = "*")
public class ParametersController {

    @Autowired
    ParametersService parametersService;

    //http://localhost:8085/TestApp/display-TestApp
    @GetMapping()
    public List<Parameters> findAll() {

        return parametersService.findAll();
    }

    @GetMapping("/{id}")
    public Parameters findById(@PathVariable("id") Integer id) {
        return parametersService.findById(id);
    }

    //http://localhost:8089/TestApp/create-TestApp
    @PostMapping()
    public Parameters save(@RequestBody Parameters parameters) {
        return parametersService.save(parameters);

    }

    @PutMapping()
    public Parameters updateTestApp(@RequestBody Parameters parameters) {
        return parametersService.update(parameters);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        parametersService.delete(id);
    }

    @PostMapping("/{id}")
    public Parameters addParamsAndAssignToPaths(@RequestBody Parameters parameters, @PathVariable("id") Integer id) {
     return    parametersService.addParamsAndAssignToPaths(parameters, id);
    }
    @GetMapping("GetListparameters/{id}")
    public Set<Parameters> GetListparameters(@PathVariable("id") Integer id) {
        return parametersService.GetListparameters(id);
    }
}

