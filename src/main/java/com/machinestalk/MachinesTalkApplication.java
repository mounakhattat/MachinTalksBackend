package com.machinestalk;

import com.machinestalk.geenerateclass.ClassGenerated;
import com.machinestalk.geenerateclass.GatlingTest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MachinesTalkApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(MachinesTalkApplication.class, args);
		ClassGenerated.testing();

	}
}
