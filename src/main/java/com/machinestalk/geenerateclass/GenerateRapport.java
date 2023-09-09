package com.machinestalk.geenerateclass;


import com.machinestalk.models.SetupDTO;
import io.gatling.app.Gatling;
import io.gatling.core.config.GatlingPropertiesBuilder;
import org.springframework.stereotype.Service;

@Service
public class GenerateRapport {

    public void  Rapport (SetupDTO setupDTO){
        GatlingPropertiesBuilder var1 = new GatlingPropertiesBuilder();
        var1.simulationClass("com.machinestalk.geenerateclass."+setupDTO.getName());
        Gatling.fromMap(var1.build());
    }

   /* public static void main(String[] args) {
        GatlingPropertiesBuilder var1 = new GatlingPropertiesBuilder();
        var1.simulationClass("com.machinestalk.geenerateclass.MachinesTalk");
        Gatling.fromMap(var1.build());
    }*/
}


