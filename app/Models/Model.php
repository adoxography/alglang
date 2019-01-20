<?php

namespace App\Models;

use App\Traits\AdaptsToConnections;
use App\Traits\Presentable;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Support\Collection;

class Model extends BaseModel
{
    use AdaptsToConnections, Presentable;

    protected static $template = ['name' => '', 'id' => ''];

    public static function fieldTemplate(bool $root = true) : Collection
    {
        $fields = collect();
        $template = collect(['fields' => $fields]);
        $class = get_called_class();

        foreach ($class::$template as $field => $value) {
            if (is_string($value) && class_exists($value)) {
                if ($root || $class != $value) {
                    $template[$field] = $value::fieldTemplate(false);
                }
            } else {
                $fields[$field] = $value;
            }
        }

        return $template;
    }

    public static function fieldTemplate(bool $root = true) : Collection
    {
        $fields = collect();
        $template = collect(['fields' => $fields]);
        $class = get_called_class();

        foreach ($class::$template as $field => $value) {
            if (is_string($value) && class_exists($value)) {
                if ($root || $class != $value) {
                    $template[$field] = $value::fieldTemplate(false);
                }
            } else {
                $fields[$field] = $value;
            }
        }

        return $template;
    }
>>>>>>> Move fieldTemplate into the base model class
}
