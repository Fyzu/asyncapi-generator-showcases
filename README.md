# asyncapi-generator-showcases

## Issues

### Reserved words

All property names from the `RESERVED_KEYWORDS` list are specifically changed in the output type, e.g. `type` -> `reservedType`.

It is possible to override this behavior if you configure the ENTIRE generator by yourself.

### Inheritance doesn't work
When you try to do basic inheritance, you get a warning like this on generation:
```
Processing allOf, inheritance is not enabled. AllOf model is merged together with already interpreted model
```
It says that `inheritance is not enabled`, but in fact, even if you try to enable it in `intrepeter` through file modification, it will crash because it doesn't know how to handle it.

### Anonymous models names

Very often, even where there is potentially a type name, the generator cannot find it and assigns the generated type a name like `AnonymousSchema_99`.

### Constants are not inlined

Any constant value (`const`) is treated by the generator as an `enum` of one element.

### Discriminator doesn't work

Despite the declared support for `descrimantor` by the `Async API` specification, the generator doesn't know how to handle this.

### Merge of types

For some reason some types merge with each other for no good reason, for example `FeedEvent` where `oneOf` all possible events is merged into one type in `FeedDataMessage`.