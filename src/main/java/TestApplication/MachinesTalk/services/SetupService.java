package TestApplication.MachinesTalk.services;

import TestApplication.MachinesTalk.entities.Setup;

import java.util.List;

public interface SetupService {
    List<Setup> findAll();

    Setup save (Setup setup) throws Exception;

    Setup update ( Setup setup);

    Setup findById (Integer id);

    void delete(Integer id);

  void assignScenarioToSetup(Setup setup);
}
