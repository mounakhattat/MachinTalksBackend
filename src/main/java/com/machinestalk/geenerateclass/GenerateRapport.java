package com.machinestalk.geenerateclass;


import io.gatling.app.Gatling;
import io.gatling.core.config.GatlingPropertiesBuilder;
import org.springframework.stereotype.Service;

@Service
public class GenerateRapport {

    public void  Rapport (){
        GatlingPropertiesBuilder var1 = new GatlingPropertiesBuilder();
        var1.simulationClass("com.machinestalk.geenerateclass.MachinesTalk");
        Gatling.fromMap(var1.build());}
}


