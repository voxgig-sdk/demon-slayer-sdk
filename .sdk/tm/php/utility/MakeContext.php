<?php
declare(strict_types=1);

// DemonSlayer SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DemonSlayerMakeContext
{
    public static function call(array $ctxmap, ?DemonSlayerContext $basectx): DemonSlayerContext
    {
        return new DemonSlayerContext($ctxmap, $basectx);
    }
}
