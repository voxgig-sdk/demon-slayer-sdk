<?php
declare(strict_types=1);

// DemonSlayer SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DemonSlayerFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DemonSlayerBaseFeature();
            case "test":
                return new DemonSlayerTestFeature();
            default:
                return new DemonSlayerBaseFeature();
        }
    }
}
