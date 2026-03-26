<?php

namespace App\Providers;

use App\Repositories\CategoryRepository;
use App\Repositories\FamilieRepository;
use App\Repositories\Interfaces\CategoryRepositoryInterface;
use App\Repositories\Interfaces\FamilieRepositoryInterface;
use App\Repositories\Interfaces\OptionsRepositoryInterface;
use App\Repositories\Interfaces\SubcategoryRepositoryInterface;
use App\Repositories\OptionsRepository;
use App\Repositories\SubcategoryRepository;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        
        $this->app->bind(
            OptionsRepositoryInterface::class,
            OptionsRepository::class
        );

        $this->app->bind(
            FamilieRepositoryInterface::class,
            FamilieRepository::class

        );


        $this->app->bind(
            CategoryRepositoryInterface::class,
            CategoryRepository::class

        );

        $this->app->bind(
            SubcategoryRepositoryInterface::class,
            SubcategoryRepository::class

        );

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null
        );
    }
}
