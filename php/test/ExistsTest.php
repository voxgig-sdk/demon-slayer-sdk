<?php
declare(strict_types=1);

// DemonSlayer SDK exists test

require_once __DIR__ . '/../demonslayer_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DemonSlayerSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
