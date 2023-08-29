package com.machinestalk.geenerateclass;


import io.gatling.app.Gatling;
import io.gatling.core.config.GatlingPropertiesBuilder;

public class Main {
    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException {
           GatlingPropertiesBuilder var1 = new GatlingPropertiesBuilder();
        var1.simulationClass("com.machinestalk.geenerateclass.MachinesTalk");
        Gatling.fromMap(var1.build());}
}
