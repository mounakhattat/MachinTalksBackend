package com.machinestalk.geenerateclass;
import com.machinestalk.entities.Application;
import com.machinestalk.entities.Scenario;
import com.machinestalk.enumerations.TypeTest;
import com.machinestalk.models.InformationTestType;
import com.machinestalk.models.SetupDTO;
import com.machinestalk.services.GenerationServiceImpl;
import org.objectweb.asm.ClassWriter;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
@Service
public class ClassGenerated {
    @Autowired

    GenerationServiceImpl generationService;
    public static void main(String[] args) throws Exception {
    }


    public  void testing(SetupDTO setupDTO) throws Exception {
        //Request Variable
        Scenario scenario = setupDTO.getScenarios().get(0);
        com.machinestalk.entities.Paths path = scenario.getPath();
        Application app = path.getApplication();
        ClassWriter classWriter = new ClassWriter(ClassWriter.COMPUTE_FRAMES);
        // Define class metadata
        classWriter.visit(Opcodes.V17, Opcodes.ACC_PUBLIC | Opcodes.ACC_SUPER, "com/machinestalk/geenerateclass/MachinesTalk", null, "io/gatling/javaapi/core/Simulation", null);
        // Create constructeur()
        MethodVisitor constructorVisitor = classWriter.visitMethod(Opcodes.ACC_PUBLIC, "<init>", "()V", null, null);
        constructorVisitor.visitCode();
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 0);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESPECIAL, "io/gatling/javaapi/core/Simulation", "<init>", "()V", false);
        // For HttpProtocol
        constructorVisitor.visitFieldInsn(Opcodes.GETSTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "Lio/gatling/javaapi/http/HttpProtocolBuilder;");
        constructorVisitor.visitInsn(Opcodes.DUP);
        constructorVisitor.visitLdcInsn(app.getBasicUrl());
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpProtocolBuilder", "baseUrl", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpProtocolBuilder;", false);
        constructorVisitor.visitLdcInsn("application/json");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpProtocolBuilder", "acceptHeader", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpProtocolBuilder;", false);
        constructorVisitor.visitLdcInsn("Gatling/PerformanceTest");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpProtocolBuilder", "userAgentHeader", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpProtocolBuilder;", false);
        constructorVisitor.visitVarInsn(Opcodes.ASTORE, 1);
        // For scenario
        constructorVisitor.visitLdcInsn(setupDTO.getName());
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "scenario", "(Ljava/lang/String;)Lio/gatling/javaapi/core/ScenarioBuilder;", false);
        if ("http".equals(app.getProtocol())) {
            constructorVisitor.visitLdcInsn(scenario.getName());
            constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "(Ljava/lang/String;)Lio/gatling/javaapi/http/Http;", false);
            constructorVisitor.visitLdcInsn(path.getPath());
            constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/Http", "get", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpRequestActionBuilder;", false);
        } else if ("mqtt".equals(app.getProtocol())) {
            constructorVisitor.visitLdcInsn("mqtt");
            constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/mqtt/MqttDsl", "mqtt", "(Ljava/lang/String;)Lio/gatling/javaapi/mqtt/Mqtt;", false);
        }
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "exec", "(Lio/gatling/javaapi/core/ActionBuilder;)Lio/gatling/javaapi/core/StructureBuilder;", false);
        constructorVisitor.visitTypeInsn(Opcodes.CHECKCAST, "io/gatling/javaapi/core/ScenarioBuilder");
        constructorVisitor.visitVarInsn(Opcodes.ASTORE, 2); // Assuming you have 2 local variables before this
        // setup
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 0);
        constructorVisitor.visitInsn(Opcodes.ICONST_1); // 2. Create a new array of type PopulationBuilder// For an array of size 1
        constructorVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/PopulationBuilder");
        constructorVisitor.visitInsn(Opcodes.DUP); // Duplicate the array reference
        constructorVisitor.visitInsn(Opcodes.ICONST_0); // Array index
//**
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 2);

        generationService.DefineFunctionWithTypeTestChoising(scenario.getTypeTest(),constructorVisitor,setupDTO);
        constructorVisitor.visitInsn(Opcodes.ICONST_1);
        constructorVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/ProtocolBuilder");
        constructorVisitor.visitInsn(Opcodes.DUP);
        constructorVisitor.visitInsn(Opcodes.ICONST_0);
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 1);
        constructorVisitor.visitInsn(Opcodes.AASTORE);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/PopulationBuilder", "protocols", "([Lio/gatling/javaapi/core/ProtocolBuilder;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
        // Créer un tableau avec un élément (votre objet PopulationBuilder)
        constructorVisitor.visitInsn(Opcodes.AASTORE); // End the array initialization
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/Simulation", "setUp", "([Lio/gatling/javaapi/core/PopulationBuilder;)Lio/gatling/javaapi/core/Simulation$SetUp;", false);
        constructorVisitor.visitInsn(Opcodes.POP);
        // End of the constructeur()
        constructorVisitor.visitInsn(Opcodes.RETURN);
        constructorVisitor.visitMaxs(0, 0);
        constructorVisitor.visitEnd();
        // Finish class creation
        classWriter.visitEnd();
        // Get the generated bytecode as a byte array
        byte[] classBytes = classWriter.toByteArray();
        //Save the bytecode as a .class file
        saveToFileInTargetDirectory("C:\\Users\\Mouna\\Desktop\\backavecscenario\\MachinesTalkApi\\target\\classes\\com\\machinestalk\\geenerateclass", "MachinesTalk.class", classBytes);
        /// Define a custom class loader
    }

    private static void saveToFileInTargetDirectory(String targetDirectory, String fileName, byte[] content) throws IOException {
        File targetDir = new File(targetDirectory);
        if (!targetDir.exists()) {
            boolean created = targetDir.mkdirs();
            if (!created) {
                throw new IOException("Could not create target directory");
            }
        }
        String filePath = Paths.get(targetDirectory, fileName).toString();
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            fos.write(content);
        }
    }

}
