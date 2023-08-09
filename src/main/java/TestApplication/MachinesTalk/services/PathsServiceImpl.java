package TestApplication.MachinesTalk.services;

import TestApplication.MachinesTalk.entities.Application;
import TestApplication.MachinesTalk.entities.Parameters;
import TestApplication.MachinesTalk.entities.Paths;
import TestApplication.MachinesTalk.entities.Scenario;
import TestApplication.MachinesTalk.repositories.ApplicationRepository;
import TestApplication.MachinesTalk.repositories.PathsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PathsServiceImpl implements PathsService {
    @Autowired
    PathsRepository pathsRepository;
    @Autowired
    ApplicationRepository applicationRepository;

    @Override
    public List<Paths> findAll() {
        return pathsRepository.findAll();
    }

    @Transactional
    @Override
    public Paths save(Paths paths) {
        assignParamToPath(paths);
        assignScenarioToPath(paths);
        return pathsRepository.save(paths);
    }
@Transactional
    @Override
    public Paths update(Paths paths) throws Exception {
    assignParamToPath(paths);
    assignScenarioToPath(paths);
        return pathsRepository.save(paths);
    }

    @Override
    public Paths findById(Integer id) {
        return pathsRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        pathsRepository.deleteById(id);
    }

    @Override
    public Paths addPathsAndAssignToApplication(Paths paths, Integer id) {
        Application a = applicationRepository.findById(id).get();
        paths.setApplication(a);
        pathsRepository.save(paths);
        return paths;
    }


    @Override
public void assignParamToPath(Paths paths) {
    List<Parameters> parameters = paths.getParameters().stream().map(param -> {
        param.setPathsss(paths);
        return param;
    }).collect(Collectors.toList());
    paths.setParameters(parameters);

}
    @Override
    public void assignScenarioToPath(Paths path) {
        /*List<Scenario> scenarios = path.getScenarios().stream().map(sc -> {
            sc.setPath(path);
            return sc;
        }).collect(Collectors.toList());
        path.setScenarios(scenarios);*/
    }
@Override
public  List<Paths> findByApplication_Id (Integer id ){
    return  pathsRepository.findByApplication_Id(id);
    }
}




