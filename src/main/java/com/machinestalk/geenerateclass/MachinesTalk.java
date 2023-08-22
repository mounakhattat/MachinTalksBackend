package com.machinestalk.geenerateclass;

import io.gatling.app.Gatling;
import io.gatling.core.config.GatlingPropertiesBuilder;
import io.gatling.javaapi.core.ClosedInjectionStep;
import io.gatling.javaapi.core.CoreDsl;
import io.gatling.javaapi.core.PopulationBuilder;
import io.gatling.javaapi.core.ProtocolBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpDsl;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import java.time.Duration;

public class MachinesTalk extends Simulation {
    public MachinesTalk() {
        HttpProtocolBuilder var1 = HttpDsl.http.baseUrl("https://www.jdgeue.dcm/search?q=gatling").acceptHeader("application/json").userAgentHeader("Gatling/PerformanceTest");
        ScenarioBuilder var2 = (ScenarioBuilder) CoreDsl.scenario("BasicSimulation").exec(HttpDsl.http("GET /flash-sales").get("/flash-sales"));
        this.setUp(new PopulationBuilder[]{var2.injectClosed(new ClosedInjectionStep[]{CoreDsl.constantConcurrentUsers(50).during(Duration.ofSeconds(10L))}).protocols(new ProtocolBuilder[]{var1})});
    }
    public static void main(String[] args) {
        GatlingPropertiesBuilder var1 = new GatlingPropertiesBuilder();
        var1.simulationClass("com.machinestalk.geenerateclass.MachinesTalk");
        Gatling.fromMap(var1.build());
    }
}