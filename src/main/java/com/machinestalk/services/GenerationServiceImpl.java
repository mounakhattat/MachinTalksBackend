package com.machinestalk.services;

import com.machinestalk.enumerations.TypeTest;
import com.machinestalk.models.InformationTestType;
import com.machinestalk.models.SetupDTO;
import lombok.AllArgsConstructor;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class GenerationServiceImpl implements GenerationService {
    @Override
    public void DefineFunctionWithTypeTestChoising(TypeTest typeTest,MethodVisitor methodVisitor,SetupDTO setupDTO) {
        switch (typeTest) {
            case CAPACITY_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/ClosedInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
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
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/ClosedInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
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
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
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
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate;", false);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate", "to", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$During;", false);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(2));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate$During", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$RampRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case BURST_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "atOnceUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            //************
            case CONSTANT_LOAD_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate;", false);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(1));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "java/time/Duration", "ofSeconds", "(J)Ljava/time/Duration;", false);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$ConstantRate", "during", "(Ljava/time/Duration;)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate$ConstantRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case   Exponential_Load_Test:
                methodVisitor.visitInsn(Opcodes.ICONST_4);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
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
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(3));
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$Ramp", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_3);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, setupDTO.getValueSaisie().get(4));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$Ramp;", false);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(5));
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$Ramp", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;


            case   Step_Load_Model:
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, 7);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(setupDTO.getValueSaisie().get(0));
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitLdcInsn(200);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$Ramp;", false);
                methodVisitor.visitLdcInsn(2L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$Ramp", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_2);
                methodVisitor.visitLdcInsn(5L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_3);
                methodVisitor.visitLdcInsn(200D);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate;", false);
                methodVisitor.visitLdcInsn(2L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$ConstantRate", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate$ConstantRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_4);
                methodVisitor.visitLdcInsn(5L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_5);
                methodVisitor.visitLdcInsn(200D);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "rampUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate;", false);
                methodVisitor.visitLdcInsn(500D);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate", "to", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$During;", false);
                methodVisitor.visitLdcInsn(2L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$RampRate$During", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep$RampRate$RampRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, 6);
                methodVisitor.visitLdcInsn(5L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "nothingFor", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            case SPIKE_LOAD_TEST:
                methodVisitor.visitInsn(Opcodes.ICONST_2);
                methodVisitor.visitTypeInsn(Opcodes.ANEWARRAY, "io/gatling/javaapi/core/OpenInjectionStep");
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_0);
                methodVisitor.visitLdcInsn(5D);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "constantUsersPerSec", "(D)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate;", false);
                methodVisitor.visitLdcInsn(3L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$ConstantRate", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep$ConstantRate$ConstantRateOpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitInsn(Opcodes.DUP);
                methodVisitor.visitInsn(Opcodes.ICONST_1);
                methodVisitor.visitIntInsn(Opcodes.BIPUSH, 13);
                methodVisitor.visitMethodInsn(Opcodes.INVOKESTATIC, "io/gatling/javaapi/core/CoreDsl", "stressPeakUsers", "(I)Lio/gatling/javaapi/core/OpenInjectionStep$StressPeak;", false);
                methodVisitor.visitLdcInsn(2L);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/OpenInjectionStep$StressPeak", "during", "(J)Lio/gatling/javaapi/core/OpenInjectionStep;", false);
                methodVisitor.visitInsn(Opcodes.AASTORE);
                methodVisitor.visitMethodInsn(Opcodes.INVOKEVIRTUAL, "io/gatling/javaapi/core/ScenarioBuilder", "injectOpen", "([Lio/gatling/javaapi/core/OpenInjectionStep;)Lio/gatling/javaapi/core/PopulationBuilder;", false);
                break;
            default:
        }

    }
}
