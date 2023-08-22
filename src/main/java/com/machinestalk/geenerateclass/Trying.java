package com.machinestalk.geenerateclass;

import org.objectweb.asm.ClassWriter;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;
import org.objectweb.asm.Type;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.Method;
import java.nio.file.Paths;

public class Trying {
    public static void main(String[] args) throws Exception {
        testing();

        //  Class.forName("com.machinestalk.geenerateclass.MachinesTalk").newInstance();
    }

    public static void testing() throws Exception {
        ClassWriter classWriter = new ClassWriter(ClassWriter.COMPUTE_FRAMES);
        // Define class metadata
        classWriter.visit(Opcodes.V17, Opcodes.ACC_PUBLIC, "com/machinestalk/geenerateclass/Trying", null, "io/gatling/javaapi/core/Simulation", null);
        // Create constructeur()
        MethodVisitor constructorVisitor = classWriter.visitMethod(Opcodes.ACC_PUBLIC, "<init>", "()V", null, null);
        constructorVisitor.visitCode();
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 0);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESPECIAL, "io/gatling/javaapi/core/Simulation", "<init>", "()V", false);


        // For HttpProtocol
        constructorVisitor.visitFieldInsn(Opcodes.GETSTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "Lio/gatling/javaapi/http/HttpDsl;");

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
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpRequestBuilder;", false);
        constructorVisitor.visitLdcInsn("/flash-sales");
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpRequestBuilder", "get", "(Ljava/lang/String;)Lio/gatling/javaapi/http/HttpRequestBuilder;", false);
         /*
            constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/http/HttpDsl", "status", "()Lio/gatling/javaapi/core/Check;", false);
            constructorVisitor.visitLdcInsn( 200); // Load the expected status code (200)
            constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io.gatling.javaapi.core$Check", "is", "(I)Lio/gatling/javaapi/core$Check", false);
            // Call the .check
            constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpRequestBuilder", "check", "(Lio/gatling/javaapi/core/CheckBuilder$Check;)Lio/gatling/javaapi/http/HttpRequestBuilder;", false);
*/
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/HttpRequestBuilder", "exec", "(Lio/gatling/javaapi/core/ChainBuilder;)Lio/gatling/javaapi/core/ScenarioBuilder;", false);
        constructorVisitor.visitVarInsn(Opcodes.ASTORE, 0);
        // setup
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 0);
        constructorVisitor.visitLdcInsn(50);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantConcurrentUsers", "(I)Lio/gatling/javaapi/core/InjectionStep;", true);
        constructorVisitor.visitLdcInsn(10);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(I)Ljava/time/Duration;", true);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEINTERFACE, "io/gatling/javaapi/core/InjectionStep", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/InjectionStep;", true);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEINTERFACE, "io/gatling/javaapi/core/ScenarioBuilder", "injectClosed", "(Lio/gatling/javaapi/core/InjectionStep;)Lio/gatling/javaapi/core/PopulatedScenarioBuilder;", true);
        constructorVisitor.visitVarInsn(Opcodes.ALOAD, 1);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEINTERFACE, "io/gatling/javaapi/http/HttpProtocolBuilder", "protocols", "(Lio/gatling/javaapi/http/HttpProtocolBuilder;)Lio/gatling/javaapi/core/ChainBuilder;", false);
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "this", "setUp", "(Lio/gatling/javaapi/core/Simulation/SetUp;)Lio/gatling/javaapi/core/InjectionStep;", true);
        // End of the constructeur()
        constructorVisitor.visitInsn(Opcodes.RETURN);
        constructorVisitor.visitMaxs(1, 2);
        constructorVisitor.visitEnd();


        //create methode MOMO
        MethodVisitor mv = classWriter.visitMethod(Opcodes.ACC_PUBLIC , "Test", "()V", null, null);
        mv.visitCode();
        mv.visitTypeInsn(Opcodes.NEW, "io/gatling/core/config/GatlingPropertiesBuilder");
        mv.visitInsn(Opcodes.DUP);
        mv.visitMethodInsn(Opcodes.INVOKESPECIAL, "io/gatling/core/config/GatlingPropertiesBuilder", "<init>", "()V", false);
        mv.visitVarInsn(Opcodes.ASTORE, 1);

        mv.visitVarInsn(Opcodes.ALOAD, 1);
        //    mv.visitLdcInsn(Type.getObjectType("com.machinestalk.geenerateclass.MachinesTalk"));
        // Call getName() on the class
        mv.visitMethodInsn(Opcodes.INVOKESTATIC, "this", "getClass", "()Ljava/lang/String;", false);

        mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "java/lang/Class", "getName", "()Ljava/lang/String;", false);
        // Call simulationClass() on the GatlingPropertiesBuilder

        mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/app/GatlingPropertiesBuilder", "simulationClass", "(Ljava/lang/String;)Lio/gatling/app/GatlingPropertiesBuilder;", false);
        // Build



        mv.visitVarInsn(Opcodes.ALOAD, 1);
        //   mv.visitMethodInsn(Opcodes.INVOKESTATIC, "this", "getClass", "()V", true);


        mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/app/GatlingPropertiesBuilder", "build", "()Ljava/util/Map;", false);
        mv.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/app/Gatling", "fromMap", "(Ljava/util/Map;)V", false);

        // Return
        mv.visitInsn(Opcodes.RETURN);
        mv.visitMaxs(0, 0);
        mv.visitEnd();


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
                if (name.equals("com.machinestalk.geenerateclass.Trying")) {
                    return defineClass(name, classBytes, 0, classBytes.length);
                }
                return super.findClass(name);
            }
        };
        // Load the generated class
        Class<?> generatedClass = classLoader.loadClass("com.machinestalk.geenerateclass.Trying");
        // Invoke the method using reflection
       Method helloWorldMethod = generatedClass.getMethod("Test");
            helloWorldMethod.invoke(null);
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
