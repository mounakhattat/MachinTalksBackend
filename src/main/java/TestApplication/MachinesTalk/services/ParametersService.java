package TestApplication.MachinesTalk.services;

import TestApplication.MachinesTalk.entities.Parameters;

import java.util.List;
import java.util.Set;

public interface ParametersService {
    List<Parameters> findAll();

    Parameters save(Parameters parameters);

    Parameters update(Parameters parameters);

    Parameters findById(Integer id);

    void delete(Integer id);

    Parameters addParamsAndAssignToPaths(Parameters parameters, Integer id);

    Set<Parameters> GetListparameters(Integer id );
}
