package com.machinestalk.geenerateclass;

import com.machinestalk.MachinesTalkApplication;

import org.objectweb.asm.ClassWriter;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;
import org.objectweb.asm.Type;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import java.nio.file.Paths;


public class ClassGenerated {
    public static void main(String[] args) throws Exception {
        testing();


        //  Class.forName("com.machinestalk.geenerateclass.MachinesTalk").newInstance();
    }

    public static void testing() throws Exception {
        ClassWriter classWriter = new ClassWriter(ClassWriter.COMPUTE_FRAMES);
        // Define class metadata
        classWriter.visit(Opcodes.V17, Opcodes.ACC_PUBLIC|Opcodes.ACC_SUPER, "com/machinestalk/geenerateclass/MachinesTalk", null, "io/gatling/javaapi/core/Simulation", null);
        // Create constructeur()
        MethodVisitor constructorVisitor = classWriter.visitMethod(Opcodes.ACC_PUBLIC, "<init>", "()V", null, null);
        constructorVisitor.visitCode();
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 0);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESPECIAL, "io/gatling/javaapi/core/Simulation", "<init>", "()V", false);


        // For HttpProtocol
        constructorVisitor.visitFieldInsn(Opcodes.GETSTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "Lio/gatling/javaapi/http/HttpProtocolBuilder;");
        constructorVisitor.visitInsn(Opcodes.DUP);
        constructorVisitor.visitLdcInsn("https://www.jdgeue.dcm/search?q=gatling");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpProtocolBuilder", "baseUrl", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpProtocolBuilder;", false);
        constructorVisitor.visitLdcInsn("application/json");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpProtocolBuilder", "acceptHeader", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpProtocolBuilder;", false);
        constructorVisitor.visitLdcInsn("Gatling/PerformanceTest");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpProtocolBuilder", "userAgentHeader", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpProtocolBuilder;", false);
        constructorVisitor.visitVarInsn(Opcodes.ASTORE, 1);

        // For scenario
        constructorVisitor.visitLdcInsn("BasicSimulation");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "scenario", "(Ljava/lang/String;)Lio/gatling/javaapi/core/ScenarioBuilder;", false);
        constructorVisitor.visitLdcInsn("GET /flash-sales");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "(Ljava/lang/String;)Lio/gatling/javaapi/http/Http;", false);
        constructorVisitor.visitLdcInsn("/flash-sales");
       constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/Http", "get", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpRequestActionBuilder;", false);
         /*
            constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/http/HttpDsl", "status", "()Lio/gatling/javaapi/core/Check;", false);
            constructorVisitor.visitLdcInsn( 200); // Load the expected status code (200)
            constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io.gatling.javaapi.core$Check", "is", "(I)Lio/gatling/javaapi/core$Check", false);
            // Call the .check
            constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpRequestBuilder", "check", "(Lio/gatling/javaapi/core/CheckBuilder$Check;)Lio/gatling/javaapi/http/HttpRequestBuilder;", false);
*/

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
        constructorVisitor.visitInsn(Opcodes.ICONST_1);
        constructorVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/ClosedInjectionStep");
        constructorVisitor.visitInsn(Opcodes.DUP);
        constructorVisitor.visitInsn(Opcodes.ICONST_0);
        constructorVisitor.visitIntInsn(Opcodes.BIPUSH, 50);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantConcurrentUsers", "(I)Lio/gatling/javaapi/core/ClosedInjectionStep$Constant;", false);
        constructorVisitor.visitLdcInsn(10L);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ClosedInjectionStep$Constant", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/ClosedInjectionStep;", false);
        constructorVisitor.visitInsn(Opcodes.AASTORE);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectClosed", "([Lio/gatling/javaapi/core/ClosedInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
        //        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ProtocolBuilder", "injectClosed", " ([Lio/gatling/javaapi/core/ClosedInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
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
       ClassLoader classLoader = new ClassLoader() {
            @Override
            protected Class<?> findClass(String name) throws ClassNotFoundException {
                if (name.equals("com.machinestalk.geenerateclass.MachinesTalk")) {
                    return defineClass(name, classBytes, 0, classBytes.length);
                }
                return super.findClass(name);
            }
        };
        // Load the generated class
        Class<?> generatedClass = classLoader.loadClass("com.machinestalk.geenerateclass.MachinesTalk");
        // Invoke the method using reflection
      // Method helloWorldMethod = generatedClass.getMethod("Test");
     //   helloWorldMethod.invoke(generatedClass.newInstance());


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
