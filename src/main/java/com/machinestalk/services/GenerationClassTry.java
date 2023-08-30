package com.machinestalk.services;

import com.machinestalk.enumerations.TypeTest;
import com.machinestalk.models.InformationTestType;
import com.machinestalk.models.SetupDTO;
import lombok.AllArgsConstructor;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

import static com.machinestalk.enumerations.TypeTest.getValueByName;

@Service
@AllArgsConstructor
public class GenerationClassTry implements GenerationService {
    @Override
    public void DefineFunctionWithTypeTestChoising(TypeTest typeTest,MethodVisitor methodVisitor,SetupDTO setupDTO) {
        switch (typeTest) {
            case CAPACITY_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampConcurrentUsers", "(I)Lio/gatling/javaapi/core/ClosedInjectionStep$Ramp;", false);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ClosedInjectionStep$Ramp", "to", "(I)Lio/gatling/javaapi/core/ClosedInjectionStep$RampTo;", false);
                Long longValue = Long.valueOf(setupDTO.getValueSaisie().get(2));
                methodVisitor.visitLdcInsn(longValue);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ClosedInjectionStep$RampTo", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/ClosedInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectClosed", "([Lio/gatling/javaapi/core/ClosedInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case SOAK_LOAD_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantConcurrentUsers", "(I)Lio/gatling/javaapi/core/ClosedInjectionStep$Constant;", false);
                Long longValue1 = Long.valueOf(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitLdcInsn(longValue1);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ClosedInjectionStep$Constant", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/ClosedInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectClosed", "([Lio/gatling/javaapi/core/ClosedInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
//============================Open
            case STRESS_LOAD_TEST:

                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "stressPeakUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$StressPeak;", false);
                methodVisitor.visitLdcInsn(Long.valueOf(setupDTO.getValueSaisie().get(1)));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$StressPeak", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case RAMP_LOAD_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                Double doubleValue = Double.valueOf(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitLdcInsn(doubleValue);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate;", false);
                Double doubleValue1 = Double.valueOf(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitLdcInsn(doubleValue1);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate", "to", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$During;", false);
                Long longValue3 = Long.valueOf(setupDTO.getValueSaisie().get(2));
                methodVisitor.visitLdcInsn(longValue3);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate$During", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$RampRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case BURST_TEST:

                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "atOnceUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            //************
            case CONSTANT_LOAD_TEST:
                //  methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                Double doubleValue4 = Double.valueOf(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitLdcInsn(doubleValue4);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate;", false);
                Long longValue4 = Long.valueOf(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitLdcInsn(longValue4);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$ConstantRate", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate$ConstantRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case   Exponential_Load_Test:


                methodVisitor.visitInsn(Opcodes.ICONST_0);
                Long longValue5 = Long.valueOf(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitLdcInsn(longValue5);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "atOnceUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_2);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, setupDTO.getValueSaisie().get(2));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$Ramp;", false);
                Long longValu = Long.valueOf(setupDTO.getValueSaisie().get(3));
                methodVisitor.visitLdcInsn(longValu);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$Ramp", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_3);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, setupDTO.getValueSaisie().get(4));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$Ramp;", false);
                Long longVal = Long.valueOf(setupDTO.getValueSaisie().get(5));
                methodVisitor.visitLdcInsn(longVal);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$Ramp", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;


            case   Step_Load_Model:

                methodVisitor.visitInsn(Opcodes.ICONST_0);
                Long longV = Long.valueOf(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitLdcInsn(longV);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$Ramp;", false);
                Long longValua = Long.valueOf(setupDTO.getValueSaisie().get(2));
                methodVisitor.visitLdcInsn(longValua);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$Ramp", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_2);
                Long longValue6 = Long.valueOf(setupDTO.getValueSaisie().get(3));
                methodVisitor.visitLdcInsn(longValue6);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_3);
                Double doubleValu = Double.valueOf(setupDTO.getValueSaisie().get(4));
                methodVisitor.visitLdcInsn(doubleValu);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate;", false);
                Long longValue7 = Long.valueOf(setupDTO.getValueSaisie().get(5));
                methodVisitor.visitLdcInsn(longValue7);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$ConstantRate", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate$ConstantRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_4);
                Long longValue8 = Long.valueOf(setupDTO.getValueSaisie().get(6));
                methodVisitor.visitLdcInsn(longValue8);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_5);
                Double doubleValue5 = Double.valueOf(setupDTO.getValueSaisie().get(7));
                methodVisitor.visitLdcInsn(doubleValue5);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate;", false);
                Double doubleValue6 = Double.valueOf(setupDTO.getValueSaisie().get(8));
                methodVisitor.visitLdcInsn(doubleValue6);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate", "to", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$During;", false);
                Long longValue0 = Long.valueOf(setupDTO.getValueSaisie().get(9));
                methodVisitor.visitLdcInsn(longValue0);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate$During", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$RampRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, 6);
                Long longValue9 = Long.valueOf(setupDTO.getValueSaisie().get(10));
                methodVisitor.visitLdcInsn(longValue9);                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case SPIKE_LOAD_TEST:
                // methodVisitor.visitInsn(Opcodes.ICONST_2);

                methodVisitor.visitInsn(Opcodes.ICONST_0);
                Double doubleValue7 = Double.valueOf(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitLdcInsn(doubleValue7);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate;", false);
                Long longVa = Long.valueOf(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitLdcInsn(longVa);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$ConstantRate", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate$ConstantRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, setupDTO.getValueSaisie().get(2));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "stressPeakUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$StressPeak;", false);
                Long longValue10 = Long.valueOf(setupDTO.getValueSaisie().get(3));
                methodVisitor.visitLdcInsn(longValue10);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$StressPeak", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case CUSTOMIZED:
                Set<TypeTest> customizedTypes = setupDTO.getCustomizedTypes();
                for (TypeTest customizedType : customizedTypes) {
                    DefineFunctionWithTypeTestChoising(customizedType, methodVisitor, setupDTO);
                }
                break;


            default:
        }

    }

}
