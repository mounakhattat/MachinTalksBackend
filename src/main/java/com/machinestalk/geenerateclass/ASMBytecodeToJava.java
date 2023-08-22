package com.machinestalk.geenerateclass;
import org.objectweb.asm.ClassReader;
import org.objectweb.asm.util.TraceClassVisitor;
import org.objectweb.asm.util.Textifier;
import java.io.PrintWriter;

public class ASMBytecodeToJava {

    public static void main(String[] args) {
        try {
            // Remplacez "YourClass.class" par le chemin vers votre fichier .class généré par ASM
            String classFilePath = "C:\\Users\\Mouna\\Desktop\\backavecscenario\\MachinesTalkApi\\baya";

            ClassReader classReader = new ClassReader(classFilePath);

            // Créer un visiteur qui imprimera le bytecode sous forme de code Java dans la console
            PrintWriter out = new PrintWriter(System.out);
            TraceClassVisitor traceClassVisitor = new TraceClassVisitor(null, new Textifier(), out);

            // Visite la classe avec le visiteur
            classReader.accept(traceClassVisitor, ClassReader.SKIP_DEBUG);

            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
