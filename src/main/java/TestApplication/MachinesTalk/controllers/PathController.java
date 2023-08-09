package TestApplication.MachinesTalk.controllers;

import TestApplication.MachinesTalk.entities.Parameters;
import TestApplication.MachinesTalk.entities.Paths;
import TestApplication.MachinesTalk.services.ParametersService;
import TestApplication.MachinesTalk.services.PathsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/paths")
@CrossOrigin(origins = "*")
public class PathController {

    @Autowired
    PathsService pathsService;

    @Autowired
    ParametersService parametersService ;
    //http://localhost:8085/TestApp/display-TestApp
    @GetMapping()
    public List<Paths> findAll() {

        return pathsService.findAll();
    }
    @GetMapping("/{id}")
    public Paths findById(@PathVariable("id") Integer id) {
        return pathsService.findById(id);
    }
    //http://localhost:8089/TestApp/create-TestApp
    @PostMapping()
    public Paths save(@RequestBody Paths paths) {
        return pathsService.save(paths);

    }

    @PutMapping()
    public Paths update( @RequestBody Paths paths)  throws Exception {
        return pathsService.update(paths);
    }




    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer id) {
        pathsService.delete(id);
    }

    @PostMapping("/{id}")
    public Paths addPathsAndAssignToApplication(@RequestBody Paths paths, @PathVariable("id") Integer id) {
        return    pathsService.addPathsAndAssignToApplication(paths, id);
    }
    @GetMapping("/ListPathByApplicationId/{id}")
    public List<Paths> findByApplication_Id(@PathVariable Integer id){
        return pathsService.findByApplication_Id(id);

    }

}
