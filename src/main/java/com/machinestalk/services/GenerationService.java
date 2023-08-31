package com.machinestalk.services;

import com.machinestalk.enumerations.TypeTest;
import com.machinestalk.models.InformationTestType;
import com.machinestalk.models.SetupDTO;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

public interface GenerationService {


     void DefineFunctionWithTypeTestChoising(TypeTest typeTest, MethodVisitor methodVisitor, SetupDTO setupDTO) ;
     String URPpath();

}
