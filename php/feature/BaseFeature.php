<?php
declare(strict_types=1);

// DemonSlayer SDK base feature

class DemonSlayerBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DemonSlayerContext $ctx, array $options): void {}
    public function PostConstruct(DemonSlayerContext $ctx): void {}
    public function PostConstructEntity(DemonSlayerContext $ctx): void {}
    public function SetData(DemonSlayerContext $ctx): void {}
    public function GetData(DemonSlayerContext $ctx): void {}
    public function GetMatch(DemonSlayerContext $ctx): void {}
    public function SetMatch(DemonSlayerContext $ctx): void {}
    public function PrePoint(DemonSlayerContext $ctx): void {}
    public function PreSpec(DemonSlayerContext $ctx): void {}
    public function PreRequest(DemonSlayerContext $ctx): void {}
    public function PreResponse(DemonSlayerContext $ctx): void {}
    public function PreResult(DemonSlayerContext $ctx): void {}
    public function PreDone(DemonSlayerContext $ctx): void {}
    public function PreUnexpected(DemonSlayerContext $ctx): void {}
}
