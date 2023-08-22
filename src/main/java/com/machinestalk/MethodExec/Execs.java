package com.machinestalk.MethodExec;

import io.gatling.javaapi.core.ActionBuilder;
import io.gatling.javaapi.core.StructureBuilder;

import javax.annotation.Nonnull;
import java.util.function.Function;

public interface Execs<
        T extends StructureBuilder<T, W>, W extends io.gatling.core.structure.StructureBuilder<W>>   {
    T make(Function<W, W> f);
    @Nonnull
    default T exec(@Nonnull ActionBuilder actionBuilder) {
        return make(wrapped -> wrapped.exec(actionBuilder.asScala()));
    }
}
