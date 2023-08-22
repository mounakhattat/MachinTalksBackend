package com.machinestalk.geenerateclass;
import org.objectweb.asm.ClassWriter;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;
import org.objectweb.asm.Type;
import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;

public class CompilerExample {
    public static void main(String[] args) throws IOException, URISyntaxException {
        // Chemin vers le répertoire de sortie des classes
        String outputDir = "baya.class";

        // Nom de la classe générée (sans l'extension .class)
        String className = "baya";

        // Obtenir le bytecode généré par ASM
        byte[] bytecode = getGeneratedBytecode();

        // Compiler le bytecode
        compileGeneratedBytecode(outputDir, className, bytecode);
    }

    private static byte[] getGeneratedBytecode() {
        ClassWriter classWriter = new ClassWriter(ClassWriter.COMPUTE_FRAMES | ClassWriter.COMPUTE_MAXS);
        // Define class metadata
        classWriter.visit(Opcodes.V17, Opcodes.ACC_PUBLIC, "baya", null, "io/gatling/javaapi/core/Simulation", null);
        // Create constructeur()
        MethodVisitor constructorVisitor = classWriter.visitMethod(Opcodes.ACC_PUBLIC, "<init>", "()V", null, null);
        constructorVisitor.visitCode();
        // For HttpProtocol
        constructorVisitor.visitFieldInsn(Opcodes.GETSTATIC, "io/gatling/javaapi/http/HttpDsl", "http", "()V");
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
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/http/HttpDsl", "status", "()Lio/gatling/javaapi/http/HttpDsl$Check", false);
        constructorVisitor.visitLdcInsn(200); // Load the expected status code (200)
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io.gatling.javaapi.core$Check", "is", "(I)Lio/gatling/javaapi/core$Check", false);
        // Call the .check
        constructorVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/http/HttpRequestBuilder", "check", "(Lio/gatling/javaapi/core/CheckBuilder$Check;)Lio/gatling/javaapi/http/HttpRequestBuilder;", false);
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
        constructorVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "this", "setUp", "(Lio/gatling/javaapi/core/ScenarioBuilder;)Lio/gatling/javaapi/core/InjectionStep;", true);
        // End of the constructeur()
        constructorVisitor.visitInsn(Opcodes.RETURN);
        constructorVisitor.visitMaxs(1, 2);
        constructorVisitor.visitEnd();


        //create methode MOMO
        MethodVisitor mv = classWriter.visitMethod(Opcodes.ACC_PUBLIC + Opcodes.ACC_STATIC, "AMIR", "()V", null, null);
        mv.visitCode();
        mv.visitTypeInsn(Opcodes.NEW, "io/gatling/app/GatlingPropertiesBuilder");
        mv.visitInsn(Opcodes.DUP);
        mv.visitMethodInsn(Opcodes.INVOKESPECIAL, "io/gatling/app/GatlingPropertiesBuilder", "<init>", "()V", false);
        mv.visitVarInsn(Opcodes.ASTORE, 1);
        mv.visitVarInsn(Opcodes.ALOAD, 1);
        mv.visitLdcInsn(Type.getType("C:\\Users\\Mouna\\Desktop\\backavecscenario\\MachinesTalkApi\\MOMO.class"));
        // Call getName() on the class
        mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "java/lang/Class", "getName", "()Ljava/lang/String;", false);
        // Call simulationClass() on the GatlingPropertiesBuilder
        mv.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/app/GatlingPropertiesBuilder", "simulationClass", "(Ljava/lang/String;)Lio/gatling/app/GatlingPropertiesBuilder;", false);
        // Build
        mv.visitVarInsn(Opcodes.ALOAD, 1);
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
        return new byte[0];
    }

    private static void compileGeneratedBytecode(String outputDir, String className, byte[] bytecode) throws IOException {
        // Convertir le nom de classe en un chemin relatif
        String relativeClassPath = className.replace('.', '/') + ".class";

        // Créer un ByteArrayInputStream pour fournir le bytecode généré à JavaCompiler
        try (InputStream inputStream = new ByteArrayInputStream(bytecode)) {
            JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
            int compilationResult = compiler.run(null, null, null, "-d", outputDir, "-sourcepath", outputDir, relativeClassPath);

            if (compilationResult == 0) {
                System.out.println("Compilation réussie !");
            } else {
                System.err.println("La compilation a échoué.");
            }
        }
    }
}

