package com.machinestalk.enumerations;

import org.objectweb.asm.Opcodes;

public enum TypeTest {
    CONSTANT_LOAD_TEST(Opcodes.ICONST_1),
    RAMP_LOAD_TEST(Opcodes.ICONST_1),
    SPIKE_LOAD_TEST(Opcodes.ICONST_2),
    STRESS_LOAD_TEST(Opcodes.ICONST_1),
    Exponential_Load_Test(Opcodes.ICONST_4),

    IP_SPOOFING(5),
    CAPACITY_TEST(Opcodes.ICONST_1),
    SOAK_LOAD_TEST(Opcodes.ICONST_1),
    BURST_TEST(Opcodes.ICONST_1),
    Step_Load_Model(9),
    CUSTOMIZED(10);
    private final int value;

    TypeTest(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
    public static int getValueByName(String name) {
        for (TypeTest type : TypeTest.values()) {
            if (type.name().equalsIgnoreCase(name)) {
                return type.getValue();
            }
        }
        throw new IllegalArgumentException("No enum constant with name " + name);
    }
}
